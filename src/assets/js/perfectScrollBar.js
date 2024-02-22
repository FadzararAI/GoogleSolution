const perfectScrollBar = () => {
    const script = document.createElement('script');
    script.src = 'https://ngapain.my.id/temp/controller/js/perfectscrollbar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}

export default perfectScrollBar;