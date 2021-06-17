import React from 'react'

const TimelineNao = () => {
  return (
    <div className="pt-8">
      <ul class="timeline" id="timeline">
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto ">
            <h4 className="mt-4">
              Early Bird
              <br />
              Registration
            </h4>
            <p className="text-white">
              June
              <br />
              24th-30th, 2021
            </p>
          </div>
        </li>
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto">
            <h4 className="mt-4">
              Regular
              <br />
              Registration
            </h4>
            <p className="text-white">
              August
              <br />
              1st-20th, 2021
            </p>
          </div>
        </li>
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto">
            <h4 className="mt-4">
              Online
              <br />
              Preliminary
            </h4>
            <p className="text-white">August 21th, 2021</p>
          </div>
        </li>
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto">
            <h4 className="mt-4">
              Top 35
              <br />
              Announcement
            </h4>
            <p className="text-white">August 25th, 2021</p>
          </div>
        </li>
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto">
            <h4 className="mt-4">
              Main Event
              <br />
              Registration
            </h4>
            <p className="text-white">
              August
              <br />
              25th-30th, 2021
            </p>
          </div>
        </li>
        <li class="li complete">
          <div class="timestamp"></div>
          <div class="status mx-auto">
            <h4 className="mt-4">
              Main
              <br />
              Event
            </h4>
            <p className="text-white">
              September
              <br />
              3rd-4th, 2021
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TimelineNao
