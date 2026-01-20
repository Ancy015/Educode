#!/usr/bin/env node

// This script inserts Kotlin curriculum into mockData.js
import fs from 'fs';

const mockDataPath = 'src/data/mockData.js';
const kotlinContentPath = 'kotlin_curriculum_insert.js';

console.log('📖 Reading Kotlin curriculum content...');
const kotlinContent = fs.readFileSync(kotlinContentPath, 'utf-8');

console.log('📄 Reading mockData.js...');
const originalContent = fs.readFileSync(mockDataPath, 'utf-8');

// Check if Kotlin content already exists
if (originalContent.includes('KOTLIN_BEGINNER_CONTENT')) {
    console.log('⚠️  Kotlin curriculum already exists in mockData.js');
    console.log('✅ No changes needed');
    process.exit(0);
}

// Find insertion point (before MOCK_QUIZ export)
const insertionPoint = originalContent.indexOf('export const MOCK_QUIZ');

if (insertionPoint === -1) {
    console.error('❌ Could not find insertion point (MOCK_QUIZ export)');
    process.exit(1);
}

console.log('✏️  Inserting Kotlin curriculum...');

// Insert the Kotlin content
const beforeInsertion = originalContent.substring(0, insertionPoint);
const afterInsertion = originalContent.substring(insertionPoint);

// Add the Kotlin content
const newContent = beforeInsertion + kotlinContent + '\n\n' + afterInsertion;

// Write the updated content
fs.writeFileSync(mockDataPath, newContent, 'utf-8');

console.log('✅ Kotlin curriculum successfully inserted into mockData.js!');
console.log('📊 Summary:');
console.log('   - 14 Beginner topics');
console.log('   - 13 Intermediate topics');
console.log('   - 13 Advanced topics');
console.log('   - Total: 40 Kotlin topics');
