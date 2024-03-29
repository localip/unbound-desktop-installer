export default ({ width = 24, height = 24, ...rest }) => <svg
   xmlns='http://www.w3.org/2000/svg'
   width={width}
   height={height}
   viewBox='0 0 20 20'
   {...rest}
>
   <path
      fill='currentColor'
      fill-rule='evenodd'
      d='M3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z'
      clip-rule='evenodd'
   />
</svg>;