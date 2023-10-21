import Title from './Title';
import Chip from '@mui/material/Chip';

const ViewQuestion = (props) => {
    const question = props.question;
    console.log(question);
    console.log(question.id);
    console.log(question.title);
    console.log(question.categories);
    console.log(question.complexity);
    console.log(question.description);
    return (
        <div>
            <Title>Question {question.id}</Title>
            <Title>{question.title}</Title>
            <div>Categories: {question.categories.map(category => (
                    <Chip key = {category} label = {category} style={{ marginRight: '8px', marginBottom: '8px' }} />
                ))}
            </div>
            <div>Complexity: {question.complexity}</div>
            <div>{question.description}</div>
        </div>
    )
};

export default ViewQuestion;