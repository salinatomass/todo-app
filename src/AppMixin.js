import { html } from "lit";

export const AppMixin = (superClass) => {
  class AppMixinElement extends superClass {
    static properties = {
      listItems: {},
      filteredItems: {},
      isDark: {},
    };

    constructor() {
      super();
      this.listItems = [
        {
          id: "ad74c494-8d7b-4109-a15f-5f5bbf01b4b8",
          text: "Complete online JavaScript course",
          completed: true,
        },
        {
          id: "c6df37c1-c398-42b3-bec9-b3e267ee4a6f",
          text: "Jog around the park 3x",
          completed: false,
        },
        {
          id: "1f74815e-4f49-4e04-beda-bdaaec23c56b",
          text: "10 minutes meditation",
          completed: false,
        },
        {
          id: "3aa19183-7c31-4546-9fb7-5c254689c9f1",
          text: "Read for 1 hour",
          completed: false,
        },
        {
          id: "70ab2fc2-f593-4721-bc12-e376f4addb67",
          text: "Pick up graceries",
          completed: false,
        },
        {
          id: "a6c74fb7-caaa-4614-be7e-31fc1f196f59",
          text: "Complete Todo App on Frontend Mentor",
          completed: false,
        },
      ];
      this.filteredItems = "all";
      this.isDark = true;
    }

    renderApp(content) {
      return html` ${content} `;
    }
  }

  return AppMixinElement;
};
