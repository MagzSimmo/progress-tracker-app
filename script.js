document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        // Check if the file is an image
        if (!file.type.startsWith('image/')) {
            document.getElementById('result').innerHTML = '<p>Please upload a valid image file.</p>';
            return;
        }

        // Display the image
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').appendChild(img);

        // Simulate analysis
        const analysis = simulateAnalysis();
        document.getElementById('result').innerHTML += `<h2>Analysis Result</h2>${analysis}`;

        // Add a positive affirmation
        const affirmation = getPositiveAffirmation();
        document.getElementById('result').innerHTML += `<h3>Positive Affirmation</h3><p>${affirmation}</p>`;
    }
});

function simulateAnalysis() {
    const analysis = {
        bodyType: "Mesomorph",
        aestheticAppeal: "Well-defined muscles with good symmetry",
        areasForImprovement: "Focus on lower body strength and core stability",
        detailedAnalysis: {
            upperBody: "Strong shoulders and arms, good muscle definition.",
            lowerBody: "Needs improvement in leg strength and muscle tone.",
            core: "Stable core, but could benefit from more definition."
        }
    };

    // Simulate visibility of body parts
    const visibleParts = {
        upperBody: true,  // Assume upper body is visible
        lowerBody: true,  // Assume lower body is visible
        core: true        // Assume core is visible
    };

    let detailedAnalysisResult = '';
    if (visibleParts.upperBody) {
        detailedAnalysisResult += `<h3>Upper Body</h3><p>${analysis.detailedAnalysis.upperBody}</p>`;
    }
    if (visibleParts.lowerBody) {
        detailedAnalysisResult += `<h3>Lower Body</h3><p>${analysis.detailedAnalysis.lowerBody}</p>`;
    }
    if (visibleParts.core) {
        detailedAnalysisResult += `<h3>Core</h3><p>${analysis.detailedAnalysis.core}</p>`;
    }

    return `
        <h3>Body Type</h3><p>${analysis.bodyType}</p>
        <h3>Aesthetic Appeal</h3><p>${analysis.aestheticAppeal}</p>
        <h3>Areas for Improvement</h3><p>${analysis.areasForImprovement}</p>
        ${detailedAnalysisResult}
    `;
}

function getPositiveAffirmation() {
    const affirmations = [
        "You're doing an amazing job!",
        "Keep pushing forward!",
        "Every step counts!",
        "Your progress is inspiring!",
        "Believe in yourself!"
    ];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}