#!/usr/bin/env node

// This script inserts C# and Go curricula into mockData.js
import fs from 'fs';
import path from 'path';

const mockDataPath = 'src/data/mockData.js';

// Read the original file
const originalContent = fs.readFileSync(mockDataPath, 'utf-8');

// Read C# and Go curricula
const csharpContent = fs.readFileSync('csharp_content_to_insert.js', 'utf-8');
const goContent = fs.readFileSync('go_curriculum_insert.js', 'utf-8');

// Find where to insert (right before MOCK_QUIZ export)
const insertionPoint = originalContent.indexOf('export const MOCK_QUIZ');

if (insertionPoint === -1) {
  console.error('Could not find insertion point');
  process.exit(1);
}

// Create combined curricula content
const combinedCurricula = `${csharpContent}\n\n${goContent}\n\n`;

// Add the getCurriculum and generateUniqueContent functions
const functionsCode = `
// Function to get curriculum topics for a language and level
function getCurriculum(langId, level) {
    const titleMaps = {
        'python': {
            'beginner': ['Variables', 'Control', 'Functions', 'Data Structures'],
            'intermediate': ['OOP', 'Decorators', 'Generators', 'File I/O'],
            'advanced': ['Metaprogramming', 'Async', 'Testing', 'Performance']
        },
        'javascript': {
            'beginner': ['Variables', 'Functions', 'Callbacks', 'DOM'],
            'intermediate': ['Closures', 'Promises', 'Classes', 'Modules'],
            'advanced': ['Async/Await', 'Generators', 'Proxy', 'Workers']
        },
        'java': {
            'beginner': ['Basics', 'OOP', 'Collections', 'Strings'],
            'intermediate': ['Generics', 'Streams', 'Lambdas', 'Reflection'],
            'advanced': ['JVM', 'Concurrency', 'NIO', 'Performance']
        },
        'cpp': {
            'beginner': ['Pointers', 'Arrays', 'Strings', 'Functions'],
            'intermediate': ['Classes', 'STL', 'Templates', 'Memory'],
            'advanced': ['Concurrency', 'Design Patterns', 'Performance', 'Modern C++']
        },
        'c': {
            'beginner': ['Syntax', 'Pointers', 'Arrays', 'Functions'],
            'intermediate': ['Structs', 'File I/O', 'Memory', 'Strings'],
            'advanced': ['Data Structures', 'Algorithms', 'Systems', 'Optimization']
        },
        'sql': {
            'beginner': ['SELECT', 'WHERE', 'Joins', 'Aggregates'],
            'intermediate': ['Subqueries', 'Indexes', 'Views', 'Transactions'],
            'advanced': ['Performance', 'Optimization', 'Replication', 'Sharding']
        },
        'csharp': {
            'beginner': csharpBeginnerTitles,
            'intermediate': csharpIntermediateTitles,
            'advanced': csharpAdvancedTitles
        },
        'go': {
            'beginner': goBeginnerTitles,
            'intermediate': goIntermediateTitles,
            'advanced': goAdvancedTitles
        }
    };
    
    return titleMaps[langId]?.[level] || [];
}

// Function to get unique content for a topic
function generateUniqueContent(langId, level, title) {
    // Check C# curricula
    if (langId === 'csharp' && level === 'beginner' && CSHARP_BEGINNER_CONTENT[title]) {
        return CSHARP_BEGINNER_CONTENT[title];
    }
    if (langId === 'csharp' && level === 'intermediate' && CSHARP_INTERMEDIATE_CONTENT[title]) {
        return CSHARP_INTERMEDIATE_CONTENT[title];
    }
    if (langId === 'csharp' && level === 'advanced' && CSHARP_ADVANCED_CONTENT[title]) {
        return CSHARP_ADVANCED_CONTENT[title];
    }
    
    // Check Go curricula
    if (langId === 'go' && level === 'beginner' && GO_BEGINNER_CONTENT[title]) {
        return GO_BEGINNER_CONTENT[title];
    }
    if (langId === 'go' && level === 'intermediate' && GO_INTERMEDIATE_CONTENT[title]) {
        return GO_INTERMEDIATE_CONTENT[title];
    }
    if (langId === 'go' && level === 'advanced' && GO_ADVANCED_CONTENT[title]) {
        return GO_ADVANCED_CONTENT[title];
    }
    
    // Default for other languages
    return {
        content: 'Content not available',
        videos: [],
        questions: []
    };
}

`;

// Build the new content
const updatedContent = 
    originalContent.slice(0, insertionPoint) +
    combinedCurricula +
    functionsCode +
    originalContent.slice(insertionPoint);

// Write the updated file
fs.writeFileSync(mockDataPath, updatedContent, 'utf-8');

console.log('✅ Successfully inserted C# and Go curricula!');
console.log(`   - Added ${csharpContent.split('\n').length} lines of C# content`);
console.log(`   - Added ${goContent.split('\n').length} lines of Go content`);
console.log(`   - Added getCurriculum and generateUniqueContent functions`);
