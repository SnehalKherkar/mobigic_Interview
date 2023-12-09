
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "file_upload"
});


app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    const query = "INSERT INTO user (`name`, `email`, `password`) VALUES (?, ?, ?)";
    db.query(query, [name, email, password], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT id FROM user WHERE email = ? AND password = ?";
    db.query(query, [email, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        if (result.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
        } else {
            const userId = result[0].id;
            req.user = { id: userId };
            res.status(200).json({ message: 'Login Successful', userId });
        }
    });
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


app.post('/upload/:user_id', upload.single('file'), (req, res) => {
    const { user_id } = req.params;
    const file_upload = req.file.filename;

    const insertQuery = 'INSERT INTO files (user_id, file_upload) VALUES (?, ?)';
    db.query(insertQuery, [user_id, file_upload], (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'File uploaded successfully' });
    });
});


app.get('/files/:user_id', (req, res) => {
    const { user_id } = req.params;

    const selectQuery = 'SELECT * FROM files WHERE user_id = ?';
    db.query(selectQuery, [user_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        res.json({ files: results });
    });
});


app.delete('/files/:file_id', (req, res) => {
    const { file_id } = req.params;

    const deleteQuery = 'DELETE FROM files WHERE id = ?';
    db.query(deleteQuery, [file_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        res.json({ success: true, message: 'File deleted successfully' });
    });
});


app.listen(9000, () => {
    console.log("Server is running....");
});
