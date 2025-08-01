import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleInput(event) {
        setTitle(event.target.value);
    }

    function handleContent(event) {
        setContent(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (title.trim() != "" || content.trim() != "") {
            props.onAdd({ title: title, content: content });
        }
        setTitle("");
        setContent("");
    }
    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                {isExpanded ? <input
                    onChange={handleInput}
                    name="title"
                    placeholder="Title"
                    value={title}
                /> : null}

                <textarea
                    onChange={handleContent}
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={content}
                />
                <Zoom in={isExpanded}>
                    <Fab type="submit"><AddIcon /></Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;
