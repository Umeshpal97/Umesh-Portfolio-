import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaCUJVGhMdgCuv2N3C36tnR2p7ZYvlAcI",
  authDomain: "umesh-portfolio-bf3a2.firebaseapp.com",
  projectId: "umesh-portfolio-bf3a2",
  storageBucket: "umesh-portfolio-bf3a2.firebasestorage.app",
  messagingSenderId: "920077072014",
  appId: "1:920077072014:web:d3fa8554da4bfc0c6afbdf",
  measurementId: "G-J61LZV4LCW"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submit
document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message
    });

    alert("Message Sent Successfully 🔥");
    document.getElementById("contactForm").reset();

  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message ❌");
  }
});
