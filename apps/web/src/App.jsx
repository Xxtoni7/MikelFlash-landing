import React from 'react';

import HomePage from '@/pages/HomePage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';

function App() {
    const isPrivacyPolicyPage = globalThis.location.pathname === '/politica-de-privacidad';

    return isPrivacyPolicyPage ? <PrivacyPolicyPage /> : <HomePage />;
}

export default App;