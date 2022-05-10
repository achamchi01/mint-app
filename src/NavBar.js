import React from 'react'

const NavBar = ({ accounts, setAccounts }) => {
    const isconnected = Boolean(accounts[0]);
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <div>

            <div>Twitter</div>
            <div>Discord</div>
            <div>Telegram</div>

            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {isconnected ? (
                <p>connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}

        </div>
    )
}

export default NavBar;