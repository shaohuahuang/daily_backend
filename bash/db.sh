#!/usr/bin/env bash
if psq mydb -c '\q' 2>&1;
then
    echo "mydb already exists"
else
    echo "mydb not exists yet"
    createdb mydb
fi