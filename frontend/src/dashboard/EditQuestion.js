import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Title from './Title';
import { useState, useEffect } from 'react';

const EditQuestion = (props) => {
    const question = props.question;
    const COMPLEXITY = props.COMPLEXITY;
    const setViewPage = props.setViewPage;
    const setEditPage = props.setEditPage;
    const checkEmpty = props.checkEmpty;
    const checkDuplicates = props.checkDuplicates;
    const checkDuplicateTitle = props.checkDuplicateTitle;
    const checkDuplicateDescription = props.checkDuplicateDescription;

    const [title, setTitle] = useState(question.title);
    const [categories, setCategories] = useState(question.categories);
    const [complexity, setComplexity] = useState(question.complexity);
    const [description, setDescription] = useState(question.description);

    const [emptyTitleMessage, setEmptyTitleMessage] = useState('');
    const [emptyDescriptionMessage, setEmptyDescriptionMessage] = useState('');
    const [emptyCategoryMessage, setEmptyCategoryMessage] = useState('');
    const [emptyComplexityMessage, setEmptyComplexityMessage] = useState('');

    const [originalTitle, setOriginalTitle] = useState(question.title);
    const [originalDescription, setOriginalDescription] = useState(question.description);
    // const [duplicateTitleMessage, setDuplicateTitleMessage] = useState('');
    // const [duplicateDescriptionMessage, setDuplicateDescriptionMessage] = useState('');

    // Use useEffect to update state when the question prop changes
    useEffect(() => {
        setTitle(question.title);
        setCategories(question.categories);
        setComplexity(question.complexity);
        setDescription(question.description);
        setEmptyTitleMessage("");
        setEmptyDescriptionMessage("");
        setEmptyCategoryMessage("");
        setEmptyComplexityMessage("");
        setOriginalTitle(question.title);
        setOriginalDescription(question.description);
        // setDuplicateTitleMessage("");
        // setDuplicateDescriptionMessage("");
    }, [question]);

    const handleUpdate = () => {
        checkEmpty(title, setEmptyTitleMessage, description, setEmptyDescriptionMessage, categories, setEmptyCategoryMessage, complexity, setEmptyComplexityMessage);

        if (!title || !description || !categories || !complexity) {
            return;
        }

        if (originalTitle === title && originalDescription === description) {
            setEditPage(false);
            setViewPage(true);
            return;
        }

        // checkDuplicates(title, setDuplicateTitleMessage, description, setDuplicateDescriptionMessage);

        // checkDuplicateTitle(title, setDuplicateTitleMessage, duplicateTitleMessage);
        // checkDuplicateDescription(description, setDuplicateDescriptionMessage);

        // if (duplicateTitleMessage || duplicateDescriptionMessage) {
        //     return;
        // }

        question.title = title;
        question.categories = categories;
        question.complexity = complexity;
        question.description = description;
        setEditPage(false);
        setViewPage(true);
    };

    return (
        <div>
            <Title>Edit Question</Title>
            <TextField 
              fullWidth
              label={'Title'} 
              id="Title" 
              margin="normal" 
              value = {title} 
              onChange={event => setTitle(event.target.value)}
              error = {!!emptyTitleMessage}
              helperText={emptyTitleMessage}
            //   error = {!!emptyTitleMessage || !!duplicateTitleMessage}
            //   helperText={emptyTitleMessage || duplicateTitleMessage}
            />
            <TextField 
              fullWidth 
              label={'Categories'} 
              id="Categories" 
              margin="normal" 
              value={categories} 
              onChange={event => setCategories(event.target.value)}
              error={!!emptyCategoryMessage}
              helperText={emptyCategoryMessage}
            />
            <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="complexity" error={!!emptyComplexityMessage}>Complexity</InputLabel>
                <Select
                    labelId="complexity"
                    id="complexity"
                    value={complexity}
                    label="Complexity"
                    onChange={event => setComplexity(event.target.value)}
                    error={!!emptyComplexityMessage}
                >
                    <MenuItem value=""><em>--Please select--</em></MenuItem>
                    <MenuItem value={COMPLEXITY.EASY}>EASY</MenuItem>
                    <MenuItem value={COMPLEXITY.MEDIUM}>MEDIUM</MenuItem>
                    <MenuItem value={COMPLEXITY.HARD}>HARD</MenuItem>
                </Select>
                <FormHelperText error>{emptyComplexityMessage}</FormHelperText>
            </FormControl>
            <TextField
                id="description"
                label={"Description"}
                multiline
                rows={4} 
                variant="outlined" 
                fullWidth
                sx={{ marginTop: 2 }}
                value={description}
                onChange={event => setDescription(event.target.value)}
                error={!!emptyDescriptionMessage}
                helperText={emptyDescriptionMessage}
                // error={emptyDescriptionMessage || duplicateDescriptionMessage}
                // helperText={emptyDescriptionMessage || duplicateDescriptionMessage}
                />
            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                onClick={handleUpdate}
            >Update Question</Button>
        </div>
    )
};

export default EditQuestion;