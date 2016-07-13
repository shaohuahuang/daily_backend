#!/usr/bin/env bash
if psql -U shaohua mydb -c '\q' 2>&1;
then
    echo "mydb already exists"
else
    echo "mydb not exists yet"
    createdb mydb
fi