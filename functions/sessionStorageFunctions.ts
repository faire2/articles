export async function saveData(key: string, value: any) {
    if (_shouldBeStringidiedForStorage(value)) {
        value = JSON.stringify(value);
        console.log("Value has been stringified.");
    }
    if (typeof value === "string") {
        try {
            await window.sessionStorage.setItem(key, value);
            console.log("Data saved. Key + " + key);
        } catch (e) {
            console.error("Failed to save data, key: " + key);
        }
    } else {
        console.error("Value could not be stringified and was not stored - key: " + key + ", value: " + value);
    }
}

export async function loadData(key: string, destringify: boolean) {
    try {
        const data = await window.sessionStorage.getItem(key);
        console.log("Data loaded. Key: " + key);
        if (destringify && data) {
            return JSON.parse(data);
        }
        return data;
    } catch (e) {
        console.error(e);
        console.log("Data could not be loaded, key: " + key);
    }
}

function _shouldBeStringidiedForStorage(value: any) {
    // only selected non-strings must be stringified
    if (typeof value !== "string") {
        switch (typeof value) {
            case "boolean":
            case "number":
            case "bigint":
            case "object":
                return true;
            default:
                console.error("Unable to stringify data for storage.");
                return null;
        }
    } else {
        return false;
    }
}