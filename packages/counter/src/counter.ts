import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("flight-counter")
export class Counter extends LitElement {
  static styles = css`
    button {
      border: 1px outset blue;
      background-color: #e1e6ed;
      height: 50px;
      width: 50px;
      cursor: pointer;
    }
    .count-div {
      display: inline-block;
      text-align: center;
      width: 50px;
      height: 50px;
    }
  `;

  @property({ type: Number })
  count = 0;

  private _onIncrement() {
    this.count++;
  }

  private _onDecrement() {
    if (this.count !== 0) {
      this.count--;
    }
  }

  render() {
    return html`
      <button @click=${this._onDecrement}>-</button>
      <div class="count-div">
        <label>${this.count}</label>
      </div>
      <button @click=${this._onIncrement}>+</button>
    `;
  }
}
