#!/bin/bash
MY_PAT=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
B64_PAT=$(printf "%s"":$MY_PAT" | base64)

USER=GeorgeFane

URL=https://github.com/GeorgeFane/GeorgeFane.github.io
URL="https://${USER}:${MY_PAT}@github.com/counterpoint-checker/counterpoint-checker.github.io"
git remote set-url origin "${URL}"
