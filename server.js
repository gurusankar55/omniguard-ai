require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// AI Agent Reasoning Endpoint
app.post('/api/run-agent', async (req, res) => {
    try {
        const { command } = req.body;
        
        if (!command) {
            return res.status(400).json({ success: false, error: "Command is required." });
        }

        console.log(`Received command from UI: ${command}`);

        // Simulate SERV Reasoning & Secure Transaction Logic
        // In production, this integrates with SERV Reasoning API & Viem
        setTimeout(() => {
            res.json({
                success: true,
                message: "SERV AI Reasoning completed successfully.",
                analysis: `Analyzed intent for: "${command}". Safety checks passed. Simulated execution on Base Sepolia.`,
                txHash: "0x48f9...c21a"
            });
        }, 1500);

    } catch (error) {
        console.error("Error executing agent:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`OmniGuard AI Server is running on http://localhost:${PORT}`);
});