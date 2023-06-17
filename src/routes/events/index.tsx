import { component$ } from '@builder.io/qwik';
import stylus from './index.module.css';
export default component$(() => {
    return (
        < >
            <div class={stylus.search}>
                <div class={stylus.searchInput}>
                    <input placeholder='search' type="text" />
                </div>
                <div class={stylus.locationInput}>
                    <input type="text" placeholder='location' />
                </div>
                <button>?</button>
            </div>
           <section>
            <div>title</div>
            <div>events groups</div>
            <div>
                <div>
               <div> <h3>date</h3>
                    <h2>date</h2>
                    <p>descirption</p>
                    <p>37 attendes</p>
                    <p>online or in person</p></div>
                    share?
                    <div>
                        <img src="" alt="" />
                    </div>

                </div>
            </div>
           </section>
        </>
  );
}); 