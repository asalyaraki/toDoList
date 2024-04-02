let num = 0
        let weekDay = ''
        let _day = new Date().getDay();
        if (_day == 1) {
            weekday = 'Monday'
        } else if (_day == 2) {
            weekDay = 'Tuesday'
        } else if (_day == 3) {
            weekDay = 'Wednesday'
        } else if (_day == 4) {
            weekDay = 'Thursday'
        } else if (_day == 5) {
            weekDay = 'Friday'
        } else if (_day == 6) {
            weekDay = 'Saturday'
        } else {
            weekDay = 'sunday'
        }

        let _h2 = document.createElement('h2')
        _h2.innerHTML = `
        Today is ${weekDay}
        `
        document.getElementById('today').appendChild(_h2)

        // end step 1 

        let inp = document.getElementsByClassName('inp')[0]
        let _list = document.getElementById('list')
        
        

        function _submit() {
            let _task = inp.value

            if (_task.length <= 3) {
                alert('Please enter your task!')
            } else {
                document.getElementsByClassName('all')[0].innerHTML=null
                subList(_task)
            }
        }

        
        function subList(_task) {
            let _li = document.createElement('li')
            _li.innerHTML = `
            <hgroup>
                <span onclick="_done(this)"><h6>✅</h6></span>
                    <h4>${_task}</h4>
            </hgroup>
            <div>
                <span onclick="_delete(this)" class="material-symbols-outlined">
                    delete
                </span>
                <span onclick="_edit(this)" class="material-symbols-outlined">
                     edit
                </span>
            </div>
            

            `
            _list.appendChild(_li)
            inp.value=null
            num++
            

            let _all = document.getElementsByClassName('all')[0]
            let _h3 = document.createElement('h3')
            _h3.innerHTML='you have ' + num + ' things to do!'

            _all.appendChild(_h3)




        }

        


        // end step 2 


        let _counter = 3
        
        function _done(s){
            
            if(_counter % 2){
                s.children[0].style.scale='1'
            }else{
                s.children[0].style.scale='0'
            }
            _counter++
            
        }

        // end step 3 

        function _delete(t){
            t.parentElement.parentElement.style.opacity='0';
            setTimeout(() => {
                t.parentElement.parentElement.remove();
                
            }, 400);
            num--

            let _all = document.getElementsByClassName('all')[0]
            _all.innerHTML=null
            let _h3 = document.createElement('h3')
            _h3.innerHTML='you have ' + num + ' things to do!'

            _all.appendChild(_h3)

            
        }

        // end step 4 

        function _edit(x){
            let prvTask = x.parentElement.previousElementSibling.children[1]
            prvTask.setAttribute('contentEditable' , 'true');
            prvTask.focus();
            prvTask.innerHTML= null
        }
