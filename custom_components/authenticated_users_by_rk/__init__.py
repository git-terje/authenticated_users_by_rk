"""Authenticated Users by rk integration."""
from homeassistant.core import HomeAssistant

DOMAIN = "authenticated_users_by_rk"

async def async_setup(hass: HomeAssistant, config: dict):
    return True

async def async_setup_entry(hass: HomeAssistant, entry):
    return True

async def async_unload_entry(hass: HomeAssistant, entry):
    return True
