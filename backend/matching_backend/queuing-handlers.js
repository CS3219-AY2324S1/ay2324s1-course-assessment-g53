const pool = require("./database/db.js");
const amq = require("amqplib")

const addToQueue = async (user_id, difficulty) => {
  const values = [user_id, difficulty];
  console.log(`adding user: ${user_id} to queue`)
  //Not sure how this line is supposed to look like uh but roughly it will be like this
  const query = `INSERT INTO queue (user_id, difficulty) VALUES ($1, $2) RETURNING user_id`;
  try {
    const { rows } = await pool.query(query, values);
    return rows.length !== 0;
  } catch {
    return false;
  }
};

const findFromQueue = async (userId, difficulty, connection) => {
  const query = `SELECT user_id FROM queue WHERE difficulty = $1 LIMIT 1`;
  try {
    const { rows } = await pool.query(query, [difficulty]);
    if (rows.length === 0) {
      console.log("No users found in queue")
      return null;
    }
    const matchedUserId = rows[0].user_id;
    const removed = await removeFromQueue(matchedUserId);
    if (!removed) {
      return null
    }
    let remainingInQueue = await pool.query(`SELECT user_id FROM queue WHERE difficulty = $1`, [difficulty]);
    remainingInQueue = remainingInQueue.rows
    console.log(remainingInQueue)
    if (remainingInQueue.length > 0) {
      console.log(`removed ${matchedUserId} next user in Queue: ` + remainingInQueue[0].user_id)
    } else {
      console.log(`removed ${matchedUserId} queue is now empty`)
    }
    
    notifyWaitingUser(connection, matchedUserId, userId);
    return matchedUserId;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const removeFromQueue = async (user_id) => {
  const query = `DELETE FROM queue WHERE user_id = $1`;
  const { rowCount } = await pool.query(query, [user_id]);
  
  return rowCount > 0;
};

async function notifyWaitingUser(connection, matchedUserId, userId) {
  const channel = await connection.createChannel();
  channel.publish("match-events", matchedUserId.toString(), Buffer.from(userId.toString()));
}

module.exports = { findFromQueue, addToQueue, removeFromQueue };

