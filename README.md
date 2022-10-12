### Env Variables

Create a .env file in then root and add the following

NODE_ENV = development
PORT = 4000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

### Install Dependencies (frontend & backend)

npm install
cd frontend
npm install

### Run

# Run frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server
