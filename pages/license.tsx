export interface LicenseProps {}

const License: React.FC<LicenseProps> = () => {
  return (
    <div className='py-64'>
      <h1 className='text-center text-3xl font-extrabold p-8'>MIT License</h1>

      <h2 className='text-center text-2xl font-extrabold p-8'>Copyright (c) 2021 Sagnik Biswas</h2>

      <h3 className='text-center text-2xl font-bold p-8'>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions: The above copyright notice and this permission
        notice shall be included in all copies or substantial portions of the
        Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
        KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </h3>
    </div>
  );
};

export default License;
