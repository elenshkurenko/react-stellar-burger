import { useDispatch } from 'react-redux';
import {useRef} from 'react'
import styles from './constructor-change-element.module.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { removeIngredient, moveDraggedIngredient } from '../../../services/actions/dragged-ingredients';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/types';

function ConstructorChangeElement({ingredient, index}){
  const dispatch = useDispatch()

  const dragRef = useRef(null)
  const previewRef = useRef(null)

  const onRemove = () => {
    dispatch(removeIngredient(ingredient.uuid))
  }

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!previewRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = previewRef.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      if (dragIndex !== undefined && hoverIndex !== undefined) {
        dispatch(moveDraggedIngredient({ dragIndex, hoverIndex}))
      }
      item.index = hoverIndex
    },
  })
  const [, drag, preview] = useDrag({
    type: 'constructor-ingredient',
    item: () => ingredient,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  
  drag(dragRef)
  drop(preview(previewRef))


  return(
    <div className={styles.wrap} ref={previewRef} data-handler-id={handlerId}>
      <div ref={dragRef}>
        <DragIcon type="primary"  />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass='ml-2'
        handleClose={onRemove}
      />
    </div>
  )
}

ConstructorChangeElement.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  index: PropTypes.number
}

export default ConstructorChangeElement;