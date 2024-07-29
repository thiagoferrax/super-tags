import express from 'express';
import cors from "cors"
import { UserManagmentRoutes } from './routes/user-managment';
import { SuperTagRoutes } from './routes/super-tag';
const app = express();
const port = 3001;

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

UserManagmentRoutes(app)
SuperTagRoutes(app)

// Iniciar o servidor
app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});