document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById('userName');
    const goalAmount = document.getElementById('goalAmount');
    const referralCode = document.getElementById('referralCode');
    const transactionList = document.getElementById('transactionList');

    // Dummy data for demonstration
    userName.textContent = "John Doe"; // Replace with dynamic user data
    goalAmount.textContent = "$500"; // Replace with dynamic donation data
    referralCode.textContent = "XYZ123"; // Replace with actual referral code

    // Sample transactions data
    const transactions = [
        { name: "Alice", amount: "$100", date: "2024-10-10" },
        { name: "Bob", amount: "$50", date: "2024-10-11" }
    ];

    // Populate transaction list
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.date}</td>
        `;
        transactionList.appendChild(row);
    });

    // Copy Donation Link functionality
    document.getElementById('copyLinkBtn').addEventListener('click', () => {
        const donationLink = "http://yourwebsite.com/donate?ref=XYZ123"; // Update with your donation link
        navigator.clipboard.writeText(donationLink).then(() => {
            alert('Donation link copied to clipboard!');
        });
    });

    // Share on WhatsApp functionality
    document.getElementById('shareWhatsAppBtn').addEventListener('click', () => {
        const donationLink = "http://yourwebsite.com/donate?ref=XYZ123"; // Update with your donation link
        const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});
