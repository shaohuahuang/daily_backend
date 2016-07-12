#!/usr/bin/env bash
liquibase --changeLogFile=install.xml update
liquibase --changeLogFile=update.xml update