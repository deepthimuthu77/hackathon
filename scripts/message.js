document.addEventListener("DOMContentLoaded", () => {
    const chatItems = document.querySelectorAll(".chat-item");
    const messageInput = document.querySelector(".message-input");
    const sendButton = document.querySelector(".send-button");
    const messagesContainer = document.querySelector(".messages");

    // Highlight active chat item
    chatItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".chat-item.active")?.classList.remove("active");
            item.classList.add("active");
        });
    });

    // Send message function
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return;
        
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.textContent = messageText;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        messageInput.value = "";
    }

    // Send message on button click
    sendButton.addEventListener("click", sendMessage);
    
    // Send message on Enter key
    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});