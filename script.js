document.addEventListener("DOMContentLoaded", function() {
    // Initialization code if needed
});

let lastShownBar = null; // Variable to keep track of the last shown bar

function showLayer(layerName, isVisible) {
    var layer = document.querySelector('.' + layerName);
    if (layer) {
        layer.style.visibility = isVisible ? 'visible' : 'hidden';
        layer.setAttribute('data-visible', isVisible ? 'true' : 'false');
    }
}

function updateLayerVisibility(selectedValue, questionNumber) {
    var points = parseInt(selectedValue);

    if (questionNumber === 1) {
        showLayer('g1', points === 3);
        showLayer('yy1', points === 0);
        showLayer('rr1', points === 1);
        showLayer('gr1', points === 2);
    } else if (questionNumber === 2) {
        showLayer('g2', points === 3);
        showLayer('yy2', points === 0);
        showLayer('rr2', points === 1);
        showLayer('gr2', points === 2);
    } else if (questionNumber === 3) {
        showLayer('g3', points === 3);
        showLayer('yy3', points === 0);
        showLayer('rr3', points === 1);
        showLayer('gr3', points === 2);
    } else if (questionNumber === 4) {
        showLayer('g4', points === 3);
        showLayer('yy4', points === 0);
        showLayer('rr4', points === 1);
        showLayer('gr4', points === 2);
    } else if (questionNumber === 5) {
        showLayer('g5', points === 3);
        showLayer('yy5', points === 0);
        showLayer('rr5', points === 1);
        showLayer('gr5', points === 2);
    } else if (questionNumber === 6) {
        showLayer('g6', points === 3);
        showLayer('yy6', points === 0);
        showLayer('rr6', points === 1);
        showLayer('gr6', points === 2);
    } else if (questionNumber === 7) {
        showLayer('g7', points === 3);
        showLayer('yy7', points === 0);
        showLayer('rr7', points === 1);
        showLayer('gr7', points === 2);
    } else if (questionNumber === 8) {
        showLayer('g8', points === 3);
        showLayer('yy8', points === 0);
        showLayer('rr8', points === 1);
        showLayer('gr8', points === 2);
    } else if (questionNumber === 9) {
        showLayer('g9', points === 3);
        showLayer('yy9', points === 0);
        showLayer('rr9', points === 1);
        showLayer('gr9', points === 2);
    } else if (questionNumber === 10) {
        showLayer('g10', points === 3);
        showLayer('yy10', points === 0);
        showLayer('rr10', points === 1);
        showLayer('gr10', points === 2);
    } else if (questionNumber === 11) {
        showLayer('g11', points === 3);
        showLayer('yy11', points === 0);
        showLayer('rr11', points === 1);
        showLayer('gr11', points === 2);
    } else if (questionNumber === 12) {
        showLayer('g12', points === 3);
        showLayer('yy12', points === 0);
        showLayer('rr12', points === 1);
        showLayer('gr12', points === 2);
    }
    // Calculate and display the total points
    displayTotalPoints();
}

function displayTotalPoints() {
    let totalPoints = 0;
    let zeroPointsCount = 0;

    for (let i = 1; i <= 12; i++) {
        const selectElement = document.querySelector(`select[name="question${i}"]`);
        const points = parseInt(selectElement.value);

        if (points === 0) {
            zeroPointsCount++;
        }
        // Check if points are -1, if not add to totalPoints
        if (points !== -1) {
            totalPoints += points;
        }
    }


    // Adjust the divisor based on the number of zero points
    const divisor = 36 - (3 * zeroPointsCount);

    // Divide the total points by the adjusted divisor and multiply by 100
    const normalizedPoints = (totalPoints / divisor) * 100;
    document.getElementById('pointsCircle').textContent = normalizedPoints.toFixed(2);

    // Update the bar image based on normalized points
    updateBarImage(normalizedPoints);
}
function updateBarImage(points) {
    const barMapping = {
        28: '.bar_28',
        30: '.bar_30',
        32: '.bar_32',
        34: '.bar_34',
        36: '.bar_36',
        38: '.bar_38',
        40: '.bar_40',
        42: '.bar_42',
        44: '.bar_44',
        46: '.bar_46',
        48: '.bar_48',
        50: '.bar_50',
        52: '.bar_52',
        54: '.bar_54',
        56: '.bar_56',
        58: '.bar_58',
        60: '.bar_60',
        62: '.bar_62',
        64: '.bar_64',
        66: '.bar_66',
        68: '.bar_68',
        70: '.bar_70',
        72: '.bar_72',
        74: '.bar_74',
        75: '.bar_75',
        76: '.bar_76',
        78: '.bar_78',
        80: '.bar_80',
        82: '.bar_82',
        84: '.bar_84',
        86: '.bar_86',
        88: '.bar_88',
        90: '.bar_90',
        92: '.bar_92',
        94: '.bar_94',
        96: '.bar_96',
        98: '.bar_98',
        100: '.bar_100'
    };

    // Hide the last shown bar if there was one
    if (lastShownBar) {
        document.querySelector(lastShownBar).style.visibility = 'hidden';
    }

    // Determine the current bar to display
    let currentBarKey = Object.keys(barMapping).reduce((prev, curr) => {
        return (Math.abs(curr - points) < Math.abs(prev - points) ? curr : prev);
    });

    let currentBarSelector = barMapping[currentBarKey];

    // Show the current bar
    if (currentBarSelector) {
        document.querySelector(currentBarSelector).style.visibility = 'visible';
        lastShownBar = currentBarSelector;
    }
}


