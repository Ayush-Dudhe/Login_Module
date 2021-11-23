// Predefined library imports
import React, { useEffect, useMemo } from "react";
import { Link, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUploadRounded"
import { useDropzone } from "react-dropzone";
import Vector from "../../assets/Vector.svg"

// Custom imports
import { FILE_UPLOAD } from "../../constants/app_constants"

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    height: "100%",
    background: "rgba(238, 237, 242, 0.5)",
    border: "1px dashed #575f6b",
    boxSizing: "border-box",
    borderRadius: "1rem"
}

const useStyles = makeStyles(() => ({
    link: {
        // fontFamily: "'Gotham', sans-serif",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "1.125rem",
        lineHeight: "1.5rem",
        /* identical to box height */
        letterSpacing: "0.4px",
        /* dark blue title */
        color: "#27b585",
        textDecorationThickness: "1.5px",
        cursor: "pointer"
    },
    baseStyle: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        height: "100%",
        background: "rgba(238, 237, 242, 0.5)",
        border: "1px dashed #575f6b",
        boxSizing: "border-box",
        borderRadius: "1rem"
    }
}));


const DragAndDropUpload = ({ fileImportStatus, onFileUpload, numberOfFiles }) => {
    const dropZoneOptions = {
        accept: FILE_UPLOAD.MIME_TYPES,
        multiple: FILE_UPLOAD.ALLOW_MULTIPLE,
        noClick: true,
        noKeyboard: true,
        disabled: fileImportStatus
    }
    const disabled = numberOfFiles > 9 ? true : false;
    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone(dropZoneOptions);

    const { link, baseStyle } = useStyles();

    useEffect(() => {
        onFileUpload(acceptedFiles);
    }, [acceptedFiles])

    return (
        <>

            <div {...getRootProps({ className: baseStyle })} >
                {
                    numberOfFiles > 9 ? (
                        <div style={{ marginBottom: "4em", display: "flex", justifyContent: "center", flexDirection: "row", columnGap: "1em", opacity: "1.0", width: "80%", alignItems: "center" }}>
                            <img src={Vector} style={{ width: "10%" }} />
                            <div style={{ textAlign: "center" }}><h3 style={{ margin: "0" }}>You have reached maximum limit</h3> <h3 style={{ margin: "0" }}>You can't add new files</h3></div>
                        </div>
                    ) : ""
                }
                <div style={{ opacity: disabled ? "0.4" : "1.0", display: "flex", flexDirection: "column", width: "60%", alignItems: "center" }}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon className="icons upload-document-icon" />
                    <h3 style={{ margin: "0" }}>Drop files here</h3>
                    <Tooltip placement="bottom-start" title={numberOfFiles > 9 ? "Number of files cannot exceed 10" : ""} >
                        <h3 style={{ textAlign: "center", whiteSpace: "nowrap" }}>or
                            <Link underline="always" classes={{ root: link }} onClick={numberOfFiles > 9 ? (event) => event.preventDefault() : open}>Browse file</Link>
                            from your computer
                        </h3>
                    </Tooltip>
                    <h6 style={{ textAlign: "center", margin: "0" }}>*Accepted formats - PDF, PNG, JPEG and TIFF (upto 5 MB per document)</h6>
                </div>
            </div>
        </>
    );
}

export default DragAndDropUpload;
