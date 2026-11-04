# Memo

Mobile app (Expo / React Native) with a Spring Boot backend for saving quotes and linking them to books, movies, music, and other media. Media metadata comes from the public iTunes Search API.

## Stack

- **Frontend:** Expo 54, React Native, React Navigation
- **Backend:** Spring Boot, JPA, H2 (local dev)

## Local setup

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

API runs at `http://localhost:8080/` by default.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # Windows: copy .env.example .env
# Edit .env: set EXPO_PUBLIC_SERVER_URL to your backend URL
npx expo start -c
```

- **Same machine (simulator):** `EXPO_PUBLIC_SERVER_URL=http://localhost:8080/`
- **Physical phone on Wi‑Fi:** use your PC’s LAN IP, e.g. `http://192.168.x.x:8080/`, and ensure the backend is running and reachable (same network; allow Java through the firewall if needed).

Changing `.env` or the server URL requires **restarting** Expo (not just reloading the app). Use `npx expo start -c` after network or env changes.

## Making the repo public

This project has no paid API keys in source. Keep real URLs in `frontend/.env` (gitignored); commit only `.env.example`. Do not commit `node_modules/`, `backend/target/`, or `.expo/`.

## License

[Personal / non-commercial use](LICENSE) — you may view, learn from, and run this for yourself, education, and portfolio-style demos. **Commercial use** (including building or running a business on this code) requires **written permission** from [@dtm03](https://github.com/dtm03).

This is not OSI “open source” (MIT/Apache-style); it is **source-available** with those restrictions.
