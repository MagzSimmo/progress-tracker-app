document.getElementById('uploadButton').addEventListener('click', async function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        // Display the image
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').appendChild(img);

        // Simulate sending the file to Copilot for analysis
        const result = await copilotAnalyze(file);
        document.getElementById('result').innerHTML += `<p>Analysis Result: ${result}</p>`;

        // Add a positive affirmation
        const affirmation = getPositiveAffirmation();
        document.getElementById('result').innerHTML += `<p>${affirmation}</p>`;
    }
});

async function copilotAnalyze(file) {
    // Simulate a detailed analysis of the physique
    const analysis = {
        bodyType: "Mesomorph",
        aestheticAppeal: "Well-defined muscles with good symmetry",
        areasForImprovement: "Focus on lower body strength and core stability",
        overallImpression: "Great progress! Keep up the good work.",
        detailedAnalysis: {
            upperBody: "Strong shoulders and arms, good muscle definition.",
            lowerBody: "Needs improvement in leg strength and muscle tone.",
            core: "Stable core, but could benefit from more definition."
        }
    };

    // Check if body parts are visible in the photo (simulated)
    const visibleParts = {
        upperBody: true,  // Assume upper body is visible
        lowerBody: false, // Assume lower body is not visible
        core: false       // Assume core is not visible
    };

    let detailedAnalysisResult = '';
    if (visibleParts.upperBody) {
        detailedAnalysisResult += `Upper Body: ${analysis.detailedAnalysis.upperBody}<br>`;
    }
    if (visibleParts.lowerBody) {
        detailedAnalysisResult += `Lower Body: ${analysis.detailedAnalysis.lowerBody}<br>`;
    }
    if (visibleParts.core) {
        detailedAnalysisResult += `Core: ${analysis.detailedAnalysis.core}<br>`;
    }

    return `
        Body Type: ${analysis.bodyType}<br>
        Aesthetic Appeal: ${analysis.aestheticAppeal}<br>
        Areas for Improvement: ${analysis.areasForImprovement}<br>
        Overall Impression: ${analysis.overallImpression}<br>
        <strong>Detailed Analysis:</strong><br>
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