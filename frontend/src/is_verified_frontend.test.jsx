import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ItemMeta from "./components/Item/ItemMeta";

const mockStore = configureStore([]);

describe("ItemMeta component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      // mock initial state if needed
    });
  });

  it("shows verified badge when seller is verified", () => {
    const item = {
      seller: {
        username: "testuser",
        image: "image.png",
        isVerified: true
      },
      createdAt: new Date().toISOString()
    };

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ItemMeta item={item} />
        </Router>
      </Provider>
    );

    expect(wrapper.find(".verified-badge")).toHaveLength(1);
  });

  it("does not show verified badge when seller is not verified", () => {
    const item = {
      seller: {
        username: "testuser",
        image: "image.png",
        isVerified: false
      },
      createdAt: new Date().toISOString()
    };

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ItemMeta item={item} />
        </Router>
      </Provider>
    );

    expect(wrapper.find(".verified-badge")).toHaveLength(0);
  });
});