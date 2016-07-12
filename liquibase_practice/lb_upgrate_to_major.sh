#!/usr/bin/env bash
Liquibase --changeLogFile=upgrade_to_major.xml update
Liquibase --changeLogFile=update.xml update
