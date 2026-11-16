import pytest

pytest_plugins = ["pytest_jupyter.jupyter_server"]


@pytest.fixture
def jp_server_config():
    return {"ServerApp": {"jpserver_extensions": {"jsoniq_jupyterlab_extension": True}}}
