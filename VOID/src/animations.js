inView('.container')
    .on('enter', container => {
        container.classList.add('in-viewport')
    })
    .on('exit', container => {
        container.classList.remove('in-viewport')
    });

inView.threshold(0.5)
