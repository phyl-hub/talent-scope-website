#!/bin/bash
# Quick backup before making changes

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/${TIMESTAMP}"

mkdir -p "$BACKUP_DIR"

cp src/components/sections/Navbar.jsx "$BACKUP_DIR/"
cp src/components/sections/Hero.jsx "$BACKUP_DIR/"
cp src/components/sections/Comparison.jsx "$BACKUP_DIR/"
cp src/components/sections/HowItWorks.jsx "$BACKUP_DIR/"
cp src/components/sections/Pricing.jsx "$BACKUP_DIR/"
cp src/components/sections/Footer.jsx "$BACKUP_DIR/"

echo "✅ Backup created at: $BACKUP_DIR"
