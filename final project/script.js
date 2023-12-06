
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    const feedback = document.getElementById("feedback").value.trim();
    if (feedback === "") {
      alert("Please provide feedback before submitting the form.");
      event.preventDefault(); 
    }
  });
  