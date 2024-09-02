#!/bin/sh

sleep 4

npm run build

sleep 4

npm run runMigrations

npm run dev
