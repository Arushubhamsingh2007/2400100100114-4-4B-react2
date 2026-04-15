import React, { useCallback, useEffect, useState } from "react";
import "./Calculator.css";

const buttons = [
  ["C", "DEL", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "ANS", "="]
];

const mathsGuide = [
  {
    title: "Basic Operations",
    items: [
      { label: "Addition", formula: "3 + 2 = 5" },
      { label: "Subtraction", formula: "9 - 4 = 5" },
      { label: "Multiplication", formula: "6 * 7 = 42" },
      { label: "Division", formula: "24 / 6 = 4" }
    ]
  },
  {
    title: "Advanced Shortcuts",
    items: [
      { label: "Percent", formula: "50 % = 0.5" },
      { label: "Decimal", formula: "1.5 + 2.3" },
      { label: "Parentheses", formula: "(3 + 2) * 4" },
      { label: "Chain", formula: "2 + 3 * 4" }
    ]
  }
];

function evaluateMathExpression(expression) {
  const cleaned = expression.replace(/\s+/g, "");
  const tokenPattern = /\d*\.?\d+|[()+\-*/]/g;
  const tokens = cleaned.match(tokenPattern) || [];
  const outputQueue = [];
  const operatorStack = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  const applyOperator = (op, a, b) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b === 0 ? 0 : a / b;
    return 0;
  };

  const flushOperators = (until) => {
    while (operatorStack.length && operatorStack[operatorStack.length - 1] !== until) {
      outputQueue.push(operatorStack.pop());
    }
    if (until && operatorStack[operatorStack.length - 1] === until) {
      operatorStack.pop();
    }
  };

  for (let token of tokens) {
    if (/^\d*\.?\d+$/.test(token)) {
      outputQueue.push(parseFloat(token));
      continue;
    }

    if (token === "+" || token === "-" || token === "*" || token === "/") {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !== "(" &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
      continue;
    }

    if (token === "(") {
      operatorStack.push(token);
      continue;
    }

    if (token === ")") {
      flushOperators("(");
      continue;
    }
  }

  flushOperators();

  const evaluationStack = [];
  for (let token of outputQueue) {
    if (typeof token === "number") {
      evaluationStack.push(token);
      continue;
    }
    const b = evaluationStack.pop() || 0;
    const a = evaluationStack.pop() || 0;
    evaluationStack.push(applyOperator(token, a, b));
  }

  return evaluationStack[0] ?? 0;
}

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("0");

  const resetCalculator = useCallback(() => {
    setDisplay("0");
    setFormula("");
    setResult("0");
  }, []);

  const removeLast = useCallback(() => {
    setDisplay((prev) => {
      if (prev.length <= 1) return "0";
      return prev.slice(0, -1);
    });
    setFormula((prev) => prev.slice(0, -1));
  }, []);

  const pushInput = useCallback(
    (value) => {
      if (value === ".") {
        setDisplay((prev) => {
          if (prev.includes(".")) return prev;
          return prev === "0" ? "0." : prev + ".";
        });
        setFormula((prev) => (prev === "" ? "0." : prev + "."));
        return;
      }

      if (value === "%") {
        setDisplay((prev) => String(parseFloat(prev || "0") / 100));
        setFormula((prev) => `${prev} / 100`);
        return;
      }

      if (/[+\-*/]/.test(value)) {
        setFormula((prev) => {
          if (prev === "" && value !== "-") return "";
          if (/[+\-*/]$/.test(prev)) {
            return prev.slice(0, -1) + value;
          }
          return prev + value;
        });
        setDisplay(value);
        return;
      }

      setDisplay((prev) => (prev === "0" || /[+\-*/]$/.test(formula) ? value : prev + value));
      setFormula((prev) => prev + value);
    },
    [formula]
  );

  const calculateResult = useCallback(() => {
    if (!formula) return;
    try {
      const safeFormula = formula.replace(/[^0-9.+\-*/()\s]/g, "");
      const evaluated = evaluateMathExpression(safeFormula);
      const normalized = Number.isFinite(evaluated) ? evaluated : 0;
      setResult(String(normalized));
      setDisplay(String(normalized));
      setFormula(String(normalized));
    } catch {
      setDisplay("Error");
      setTimeout(() => resetCalculator(), 1200);
    }
  }, [formula, resetCalculator]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      const key = event.key;
      if ((/^[0-9.%+\-*/]$/).test(key)) {
        event.preventDefault();
        pushInput(key);
      }

      if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
      }
      if (key === "Backspace") {
        event.preventDefault();
        removeLast();
      }
      if (key.toLowerCase() === "c") {
        event.preventDefault();
        resetCalculator();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [pushInput, calculateResult, removeLast, resetCalculator]);

  return (
    <div className="calculator-shell">
      <div className="calculator-hero">
        <div className="calculator-tag">Ultra Pro Calculator</div>
        <h2>Precision math with premium glass styling.</h2>
        <p>Use keyboard or tap the buttons. Includes real-time formula preview, percent support, and sleek animation.</p>
      </div>

      <div className="calculator-layout">
        <aside className="formula-panel formula-left">
          <div className="panel-title">Formula Quick Guide</div>
          <p className="panel-intro">Handy math patterns for fast calculation and clear results.</p>
          {mathsGuide[0].items.map((item) => (
            <div key={item.label} className="formula-step">
              <span className="formula-step-label">{item.label}</span>
              <span className="formula-step-value">{item.formula}</span>
            </div>
          ))}
        </aside>

        <div className="calculator-panel">
          <div className="calculator-display">
            <div className="display-meta">Formula</div>
            <div className="display-formula">{formula || "0"}</div>
            <div className="display-result">{display}</div>
          </div>

          <div className="calculator-grid">
            {buttons.flat().map((buttonText) => (
              <button
                key={buttonText}
                type="button"
                className={`calc-button ${buttonText === "=" ? "equal-button" : ""} ${buttonText === "C" ? "clear-button" : ""} ${buttonText === "DEL" ? "delete-button" : ""}`}
                onClick={() => {
                  if (buttonText === "C") resetCalculator();
                  else if (buttonText === "DEL") removeLast();
                  else if (buttonText === "=") calculateResult();
                  else if (buttonText === "ANS") setDisplay(result);
                  else pushInput(buttonText);
                }}
              >
                {buttonText}
              </button>
            ))}
          </div>
        </div>

        <aside className="formula-panel formula-right">
          <div className="panel-title">Math Essentials</div>
          <p className="panel-intro">Use these examples to build formulas quickly and confidently.</p>
          {mathsGuide[1].items.map((item) => (
            <div key={item.label} className="formula-step">
              <span className="formula-step-label">{item.label}</span>
              <span className="formula-step-value">{item.formula}</span>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default Calculator;
