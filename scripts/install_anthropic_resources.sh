#!/usr/bin/env bash
set -euo pipefail

mkdir -p vendor/anthropics

if [ ! -d vendor/anthropics/knowledge-work-plugins/.git ]; then
  git submodule add https://github.com/anthropics/knowledge-work-plugins.git vendor/anthropics/knowledge-work-plugins || true
fi

if [ ! -d vendor/anthropics/claude-plugins-official/.git ]; then
  git submodule add https://github.com/anthropics/claude-plugins-official.git vendor/anthropics/claude-plugins-official || true
fi

git submodule update --init --recursive
