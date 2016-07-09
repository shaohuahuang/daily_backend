#!/usr/bin/env bash
git add -A
echo "---------Staging all the changes"

git commit -m "$*"
echo "-----------commit msg: $*"

git push
echo "----------push the changes to remote."