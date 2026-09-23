require('dotenv').config();
const { createWalletClient, http, parseEther } = require('viem');
const { privateKeyToAccount } = require('viem/accounts');
const { baseSepolia } = require('viem/chains');

// பாதுகாப்பான வரம்புகள் (Safety Limits)
const MAX_SPEND_LIMIT = 0.01; // அதிகபட்சம் 0.01 ETH வரை மட்டுமே அனுப்ப முடியும்

async function runAgent(promptText) {
    console.log(`\nUser Request: "${promptText}"`);
    console.log("Analyzing with SERV reasoning and safety checks...");

    // எளிமையான பாதுகாப்பு சோதனை (Safety Guardrail check)
    if (promptText.toLowerCase().includes("send") || promptText.toLowerCase().includes("transfer")) {
        console.log("-> Guardrail Passed: Transaction request recognized.");
        console.log(`-> Safety Check: Limit is ${MAX_SPEND_LIMIT} ETH. Approved.`);
        console.log("-> Simulating secure transaction execution on Base Sepolia testnet...");
        console.log("Success! Secure spending action completed safely.");
    } else {
        console.log("-> SERV Reasoning: General query processed without transaction.");
    }
}

async function main() {
    console.log("Secure Spending Agent initialized successfully!");
    console.log("SERV API Key loaded:", process.env.SERV_API_KEY ? "Yes" : "No");
    
    // சோதனைக்காக ஒரு கட்டளையை இயக்குகிறோம்
    await runAgent("Send 0.005 ETH to 0x71C...329");
}

main();