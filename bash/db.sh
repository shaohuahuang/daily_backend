#!/usr/bin/env bash
if /usr/local/bin/psql mydb -c '\q' 2>&1;
then
    echo "mydb already exists"
else
    echo "mydb not exists yet"
    /usr/local/bin/createdb mydb
fi

/usr/local/bin/psql -U shaohua mydb -a -f ./test_data/expenditure_test_data.sql