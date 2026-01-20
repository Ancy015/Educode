#!/usr/bin/env node

// This script inserts Swift curriculum into mockData.js
import fs from 'fs';

const mockDataPath = 'src/data/mockData.js';
const swiftContentPath = 'swift_curriculum_insert.js';

console.log('📖 Reading Swift curriculum content...');
const swiftContent = fs.readFileSync(swiftContentPath, 'utf-8');

console.log('📄 Reading mockData.js...');
const originalContent = fs.readFileSync(mockDataPath, 'utf-8');

// Check if Swift content already exists
if (originalContent.includes('SWIFT_BEGINNER_CONTENT')) {
    console.log('⚠️  Swift curriculum already exists in mockData.js');
    console.log('✅ No changes needed');
    process.exit(0);
}

// Find insertion point (before MOCK_QUIZ export)
const insertionPoint = originalContent.indexOf('export const MOCK_QUIZ');

if (insertionPoint === -1) {
    console.error('❌ Could not find insertion point (MOCK_QUIZ export)');
    process.exit(1);
}

console.log('✏️  Inserting Swift curriculum...');

// Insert the Swift content
const beforeInsertion = originalContent.substring(0, insertionPoint);
const afterInsertion = originalContent.substring(insertionPoint);

// Add the Swift content and update the getCurriculum function
const newContent = beforeInsertion + swiftContent + '\n\n' + afterInsertion;

// Update getCurriculum function to include Swift
let finalContent = newContent;

// Find and update the getCurriculum function
const getCurriculumStart = finalContent.indexOf("function getCurriculum(langId, level) {");
if (getCurriculumStart !== -1) {
    const titleMapsStart = finalContent.indexOf("const titleMaps = {", getCurriculumStart);
    const titleMapsEnd = finalContent.indexOf("};", titleMapsStart);
    
    if (titleMapsStart !== -1 && titleMapsEnd !== -1) {
        // Find the closing of titleMaps and insert Swift before it
        const beforeTitleMaps = finalContent.substring(0, titleMapsEnd);
        const afterTitleMaps = finalContent.substring(titleMapsEnd);
        
        // Check if swift is already in titleMaps
        if (!beforeTitleMaps.includes("'swift':")) {
            const swiftTitleMap = `,
        'swift': {
            'beginner': Object.keys(SWIFT_BEGINNER_CONTENT),
            'intermediate': Object.keys(SWIFT_INTERMEDIATE_CONTENT),
            'advanced': Object.keys(SWIFT_ADVANCED_CONTENT)
        }`;
            
            finalContent = beforeTitleMaps + swiftTitleMap + '\n    ' + afterTitleMaps;
            console.log('✅ Updated getCurriculum function with Swift');
        }
    }
}

// Update generateUniqueContent to include Swift
const generateContentStart = finalContent.indexOf("function generateUniqueContent(langId, level, topicTitle) {");
if (generateContentStart !== -1) {
    const switchStart = finalContent.indexOf("switch(langId) {", generateContentStart);
    const switchEnd = finalContent.indexOf("default:", switchStart);
    
    if (switchStart !== -1 && switchEnd !== -1) {
        const beforeSwitch = finalContent.substring(0, switchEnd);
        const afterSwitch = finalContent.substring(switchEnd);
        
        // Check if swift case already exists
        if (!beforeSwitch.includes("case 'swift':")) {
            const swiftCase = `        case 'swift':
            if (level === 'beginner') return SWIFT_BEGINNER_CONTENT[topicTitle];
            if (level === 'intermediate') return SWIFT_INTERMEDIATE_CONTENT[topicTitle];
            if (level === 'advanced') return SWIFT_ADVANCED_CONTENT[topicTitle];
            break;
        `;
            
            finalContent = beforeSwitch + swiftCase + afterSwitch;
            console.log('✅ Updated generateUniqueContent function with Swift');
        }
    }
}

// Write the updated content
fs.writeFileSync(mockDataPath, finalContent, 'utf-8');

console.log('✅ Swift curriculum successfully inserted into mockData.js!');
console.log('📊 Summary:');
console.log('   - 14 Beginner topics');
console.log('   - 13 Intermediate topics');
console.log('   - 13 Advanced topics');
console.log('   - Total: 40 Swift topics');
