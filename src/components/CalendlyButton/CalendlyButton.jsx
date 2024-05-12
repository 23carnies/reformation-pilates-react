import React from 'react';

export function CalendlyButton() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/krnzique/new-client-consultation"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}
