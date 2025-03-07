function decipher(encryptedText, knownWord) {
    // Function to shift the text by a given amount (negative for decryption)
    function shiftText(text, shift) {
        return text.split('').map(char => {
            if (char.match(/[a-zA-Z]/)) {  // Only shift alphabetic characters
                const base = char >= 'a' && char <= 'z' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
                return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
            }
            return char;
        }).join('');
    }

    // Try all possible shifts (from 1 to 25)
    for (let shift = 0; shift < 26; shift++) {
        const decryptedText = shiftText(encryptedText, -shift);  // Decrypt by shifting in the opposite direction
        if (decryptedText.includes(knownWord)) {
            return decryptedText;  // Return the decrypted text if it contains the known word
        }
    }

    return "Unable to decipher the text.";  // If no valid shift found
}

// Example input
let encryptedText = "Uifsf jt b tfdsfu dpef!";
let knownWord = "There";

// Call the function and display the result
let originalText = decipher(encryptedText, knownWord);
console.log(originalText);  // Output: "There is a secret code!"
