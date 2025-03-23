// Test series data
const testSeries = [
    {
      title: "CTET पेपर 1 मॉक टेस्ट",
      time: "90 मिनट",
      questions: "150 प्रश्न",
      description: "CTET पेपर 1 का मॉक टेस्ट जिसमें सभी विषय शामिल हैं।"
    },
    {
      title: "CTET पेपर 2 गणित और विज्ञान",
      time: "120 मिनट",
      questions: "150 प्रश्न",
      description: "CTET पेपर 2 के गणित और विज्ञान से संबंधित मॉक टेस्ट।"
    },
    {
        title: "CTET पेपर 3 गणित और विज्ञान",
        time: "120 मिनट",
        questions: "150 प्रश्न",
        description: "CTET पेपर 2 के गणित और विज्ञान से संबंधित मॉक टेस्ट।"
    }
  ];
  
  // Function to display the test series list
  function displayTestSeries() {
    const testListContainer = document.getElementById('test-series-list');
    
    testSeries.forEach(test => {
      const testItem = document.createElement('div');
      testItem.classList.add('test-series-item');
  
      const title = document.createElement('div');
      title.classList.add('test-series-title');
      title.innerText = test.title;
  
      const button = document.createElement('button');
      button.innerText = 'विवरण देखें';
      button.onclick = function() {
        const details = testItem.querySelector('.test-details');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
        button.innerText = details.style.display === 'none' ? 'विवरण देखें' : 'विवरण छुपाएं';
      };
  
      const details = document.createElement('div');
      details.classList.add('test-details');
      details.innerHTML = `<strong>समय:</strong> ${test.time} <br><strong>प्रश्नों की संख्या:</strong> ${test.questions} <br><p>${test.description}</p>`;
  
      testItem.appendChild(title);
      testItem.appendChild(button);
      testItem.appendChild(details);
  
      testListContainer.appendChild(testItem);
    });
  }
  
  // Display the list on page load
  window.onload = displayTestSeries;
  