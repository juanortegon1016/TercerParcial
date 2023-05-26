import React, { useState } from "react";
import { deleteObject, getDownloadURL, getStorage, ref } from "firebase/storage";
import { getAll, upload } from "../firebase/files";


export const useUploadHook = () => {
	const [file, setFile] = useState('');
	const [files, setFiles] = useState([]);

	const [percent, setPercent] = useState(0);

	const handleChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUpload = () => {
		const uploadTask = upload(file);
		uploadTask.on("state_changed",
		(snapshot) => {
			const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
			setPercent(percent);},

			(err) => console.log(err),
			async () => {
			const url = await getDownloadURL(uploadTask.snapshot.ref);
			setFiles((list) => [...list, url]);
			}
		);
	};

	const handleGetAll = async () => {
		const { items } = await getAll();
		items.forEach(async (itemRef) => {
			const url = await getDownloadURL(itemRef);
			setFiles((list) => [...list, url]);
		});
	};

	const handleDelete = async (item) => {
		try {
			const storage = getStorage();
			const fileRef = ref(storage, item);

			await deleteObject(fileRef);
			const filteredFiles = files.filter((file) => file !== item);
			
			setFiles(filteredFiles);
		} catch (error) {
			console.log(error);
		}
	};

	return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
};
