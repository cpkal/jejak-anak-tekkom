document.addEventListener('DOMContentLoaded', function () {
    // Create a button for copying
    const codeBlocks = document.querySelectorAll('pre');

    console.log(codeBlocks[0])
  
    codeBlocks.forEach((block) => {
      const button = document.createElement('button');
      button.innerText = 'Copy';
      button.className = 'copy-btn';
      block.parentNode.insertBefore(button, block);

        console.log(block)
  
      button.addEventListener('click', () => {
        // Get the text content of the code block
        const code = block.querySelector('code').innerText;
  
        // Create a temporary textarea element to copy the text
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
  
        // Optionally, provide user feedback
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      });
    });
  });
  