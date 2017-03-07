import React from "react";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import MarketsStore from "stores/MarketsStore";

import AltContainer from "alt-container";
import Dashboard from "./Dashboard";

class DashboardContainer extends React.Component {
    render() {
        return (
            <AltContainer
                stores={[AccountStore, SettingsStore, MarketsStore]}
                inject={{
                    linkedAccounts: () => {
                        return AccountStore.getState().linkedAccounts;
                    },
                    myIgnoredAccounts: () => {
                        return AccountStore.getState().myIgnoredAccounts;
                    },
                    accountsReady: () => {
                        return AccountStore.getState().accountsLoaded && AccountStore.getState().refsLoaded;
                    },
                    lowVolumeMarkets: () => {
                        return MarketsStore.getState().lowVolumeMarkets;
                    }
                }}>
                <Dashboard {...this.props} />
            </AltContainer>
        );
    }
}

export default DashboardContainer;
