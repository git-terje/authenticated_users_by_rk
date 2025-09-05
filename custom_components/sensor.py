"""Sensor platform for Authenticated Users by rk."""
from __future__ import annotations
from homeassistant.components.sensor import SensorEntity
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.config_entries import ConfigEntry

from .const import DOMAIN

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback):
    async_add_entities([AuthenticatedUsersSensor(hass)], True)

class AuthenticatedUsersSensor(SensorEntity):
    def __init__(self, hass: HomeAssistant) -> None:
        self._attr_name = "Authenticated Users"
        self._attr_unique_id = f"{DOMAIN}_sensor"
        self._hass = hass
        self._state = None

    @property
    def native_value(self):
        return self._state

    async def async_update(self):
        sessions = self._hass.data.get("http", {}).get("active_sessions", {})
        if sessions:
            self._state = ", ".join(user for user in sessions.keys())
        else:
            self._state = "No users"
